import { renderToStream } from '@react-pdf/renderer';
import Resume from '../../components/Resume';

export default async (req, res) => {
    try {

        const stream = await renderToStream(<Resume />);


        res.setHeader('Content-Type', 'application/pdf');


        stream.pipe(res);
    } catch (error) {

        res.status(500).send('Failed to generate PDF');
    }
};
