import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = (updateContacts) =>
  fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2));
