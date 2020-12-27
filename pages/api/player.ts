import type { NextApiRequest, NextApiResponse } from 'next';
import { Player } from '../../schema';
import { v4 as uuidv4 } from 'uuid';

type Data = {
  players: Player[];
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      players: [
        { id: uuidv4(), name: 'John Doe' },
        { id: uuidv4(), name: 'Bin Laden' },
        { id: uuidv4(), name: 'Donald Trump' },
      ],
    }),
  );
};
