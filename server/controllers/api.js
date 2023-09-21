import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.info('Get was used');
  res.status(200).json({message: 'Everything went okay'});
});

export default router;