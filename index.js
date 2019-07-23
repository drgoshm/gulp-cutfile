import through from 'through2'
import path from 'path'
import File from 'vinyl'
import { PluginError } from 'gulp-util'

const DEFAULT_REGEXP = /(?:split:\s*)([\w.]+)/gm

export const HTML = /(?:<!--\s*split:\s*)[\w.]+(?:\s*-->)/gm

export default ({ regexp, remove } = {
  regexp: DEFAULT_REGEXP,
  remove: false
}) => through.obj(function (chunk, enc, cb) {

  regexp = regexp || DEFAULT_REGEXP

  if (chunk.isNull()) {
    return cb(null, chunk)
  }

  if (chunk.isBuffer()) {
    const parts = []
    const content = chunk.contents.toString(enc)
    let part
    // eslint-disable-next-line no-cond-assign
    while (part = regexp.exec(content)) {

      if (parts.length > 0) {
        parts[parts.length - 1].end = part.index
      }

      parts.push({
        filename: part[1],
        begin: part.index + part[0].length,
        end: content.length
      })
    }

    if (parts.length === 0) {
      return cb(null, chunk)
    }

    parts.forEach(function (part) {
      if (part.begin < part.end && (!remove || part.filename !== 'remove')) {
        this.push(new File({
          cwd: chunk.cwd,
          base: chunk.base,
          path: path.join(path.dirname(chunk.path), part.filename),
          contents: Buffer.from(content.substr(part.begin, part.end - part.begin))
        }))
      }
    }.bind(this))
    return cb()
  }
  this.emit('error', PluginError('gulp-cutfile', 'Streaming not supported'))
})
