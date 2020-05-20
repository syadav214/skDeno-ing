for (let i = 0; i < Deno.args.length; i++) {
    let filename = Deno.args[i];
    let file = await Deno.open(filename);
    await Deno.copy(file, Deno.stdout);
    file.close();
  }

/*
The copy() function here actually makes 
no more than the necessary kernel→userspace→kernel copies. That is, the same memory from which data is read from the file, is written to stdout. This illustrates a general design goal for I/O streams in Deno.
*/
