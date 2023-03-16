import {people} from '../../../data'

export default function handler(
  _req,
  res
) {
  return res.status(200).json(people)
}