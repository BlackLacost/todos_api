import * as fs from 'promise-fs';

export async function getData(path: string) {
  const data = await fs.readFile(path, 'utf8');
  const todos = JSON.parse(data);
  return todos;
}
