async function foo () {
  for await (const item of items) {
    bar(item);
  }
}
