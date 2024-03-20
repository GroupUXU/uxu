import sharp from 'sharp';
import { createCanvas } from 'canvas';
import path from "path";

type CreateCustomImageProps = {
		phone: string;
		status?: 'pozytywny' | 'obojętny' | 'nieznany' | 'irytujący' | 'niebezpieczny';
}

export function generatePhoneNumberStatusImage({ phone, status = 'nieznany' }: CreateCustomImageProps): void {
		const statusColors = {
				pozytywny: '#12A594',
				nieznany: '#F5A623',
				irytujący: '#DC5103',
				niebezpieczny: '#FF1A1A',
				obojętny: '#000'
		};
		
		const width = 1400;
		const height = Math.round(width / 16 * 9);
		const canvas = createCanvas(width, height);
		const ctx = canvas.getContext('2d');
		
		ctx.fillStyle = statusColors[status] || '#000';
		ctx.fillRect(0, 0, width, height);
		ctx.fillStyle = '#000';
		ctx.font = 'bold 52px Montserrat';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(phone.match(/.{1,3}/g)?.join(" ") || '', width / 2, height / 2 - 30);
		

		ctx.font = 'bold 40px Montserrat';
		ctx.fillText(status, width / 2, height / 2 + 30);
		
		sharp(canvas.toBuffer())
					.jpeg({ quality: 80 })
					.toFile(path.join(__dirname, '..', 'img', `${phone.replace(/\D/g, "")}.jpg`))
					.then(() => console.log('The image has been created.'))
					.catch(err => console.error('An error occured:', err));
}
