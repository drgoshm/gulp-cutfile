
import assert from 'assert'
import fs from 'fs'
import mocha from 'mocha'
import gulp from 'gulp'
import through from 'through2'
import strassert from 'stream-assert'
import path from 'path'
import filesplit, {HTML} from '../'

/* Test: no-splits.file */
// eslint-disable-next-line no-undef
describe('gulp-filesplit', () => {
  // eslint-disable-next-line no-undef
  it('should leave a file with no splits alone', done => {
    const inputs = 'test/inputs/no-splits.file'
    gulp.src(inputs)
      .pipe(strassert.length(1))
      .pipe(filesplit())
      .pipe(strassert.length(1))
      .pipe(strassert.nth(0, file => {
        // eslint-disable-next-line node/no-deprecated-api
        assert.equal(file.path, path.resolve(inputs))
        const output = file.contents.toString('utf8').replace(/\r/g, '')
        // eslint-disable-next-line node/no-deprecated-api
        assert.deepEqual(output, fs.readFileSync('test/inputs/no-splits.file', 'utf8').replace(/\r/g, ''))
      }))
      .pipe(strassert.end(done))
  })
})

/* Test: index.html */
// eslint-disable-next-line no-undef
describe('gulp-filesplit', () => {
  // eslint-disable-next-line no-undef
  it('should split a file into four files', done => {
    const inputs = 'test/inputs/splitting.file'
    gulp.src(inputs)
      .pipe(strassert.length(1))
      .pipe(filesplit({ remove: true }))
      .pipe(strassert.length(4))
      .pipe(strassert.nth(0, file => {
        const filename = 'test/expected/paragraph1.file'
        // eslint-disable-next-line node/no-deprecated-api
        assert.equal(path.basename(file.path), path.basename(filename))
        const output = file.contents.toString('utf8').replace(/\n/g, '')
        // eslint-disable-next-line node/no-deprecated-api
        assert.deepEqual(output, fs.readFileSync(filename, 'utf8').replace(/\r/g, ''))
      }))
      .pipe(strassert.nth(1, file => {
        const filename = 'test/expected/paragraph2.file'
        // eslint-disable-next-line node/no-deprecated-api
        assert.equal(path.basename(file.path), path.basename(filename))
        const output = file.contents.toString('utf8').replace(/\n/g, '')
        // eslint-disable-next-line node/no-deprecated-api
        assert.deepEqual(output, fs.readFileSync(filename, 'utf8').replace(/\r/g, ''))
      }))
      .pipe(strassert.nth(2, file => {
        const filename = 'test/expected/paragraph4.file'
        // eslint-disable-next-line node/no-deprecated-api
        assert.equal(path.basename(file.path), path.basename(filename))
        const output = file.contents.toString('utf8').replace(/\n/g, '')
        // eslint-disable-next-line node/no-deprecated-api
        assert.deepEqual(output, fs.readFileSync(filename, 'utf8').replace(/\r/g, ''))
      }))
      .pipe(strassert.nth(3, file => {
        const filename = 'test/expected/paragraph5.file'
        // eslint-disable-next-line node/no-deprecated-api
        assert.equal(path.basename(file.path), path.basename(filename))
        const output = file.contents.toString('utf8').replace(/\n/g, '')
        // eslint-disable-next-line node/no-deprecated-api
        
        assert.deepEqual(output, fs.readFileSync(filename, 'utf8').replace(/\r/g, ''))
      }))
      .pipe(strassert.end(done))
  })
})
