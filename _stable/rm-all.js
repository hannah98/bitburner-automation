/** @param {NS} ns */
export async function main(ns) {

  const scriptsToKeep = ['rm-all.js'];
  //for (let i = 1; i <= 20; i++) scriptsToKeep.push(getFileHandle(i));
  let files = ns.ls('home').filter(file => file.endsWith('.js') || file.endsWith('.txt'));
  if (files.length === 0) {
    ns.tprint(`There are no files to delete`);
    return;
  }
  for (let file of files) {
    if (!scriptsToKeep.includes(file)) {
      //if (await ns.prompt(`Delete ${file}?`)) {
        ns.rm(file, 'home');
        ns.tprint(`Deleted ${file}`);
      //}
    }
  }
}
