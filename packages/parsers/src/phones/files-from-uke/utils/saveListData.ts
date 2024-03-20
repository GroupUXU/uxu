import fs from "fs";

export function saveListData<Type>({saveNewListInPath, listData, listName, typeInString}:{saveNewListInPath: string, listData: Type, listName: string, typeInString: string}): void {
		let content = `export const ${listName}: ${typeInString} = ${JSON.stringify(listData, null, 2)};\n`;
		
		fs.writeFileSync(saveNewListInPath, content, {encoding: 'utf-8'});
		console.log(`${saveNewListInPath} has been saved!`);
}