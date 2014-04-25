/*
 * In "old" Streams mode the stdin stream is paused by default, so one must call
 * process.stdin.resume() to read from it.
 *
 * Note also that calling process.stdin.resume() itself would switch stream to "old" mode.
 *
 * If you are starting a new project you should prefer a more recent "new" Streams mode over "old" one.
 */
//process.stdin.resume();

process.stdin.on('data', function(data) {
  process.stdout.write('read from console: ' + data.toString());
});

