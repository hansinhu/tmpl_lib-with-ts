import { promises as fs } from 'fs'

async function getProjectName(){
	const project = await fs.readFile('./package.json', 'utf8');
	console.log(JSON.parse(project))
}

export default getProjectName