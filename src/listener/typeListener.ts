import {
  debounce, getElementXPath, log, getActionKey,
} from '../util';
import EventType from '../models/EventType';
import { getCtx } from '../util/chrome';

const save = debounce((ctx: any) => {
  log('Inserted type event record');
  chrome.storage.sync.set({ ctx });
}, 1000);

const handleTypeWithEnter = (event: any, cb: any, keyPrefix: string) => {
  const element = event.target;
  const xPath = getElementXPath(element);
  chrome.storage.sync.get('listen', async (result) => {
    if (result.listen) {
      const arg = {
        xPath,
        ...cb(event),
      };
      const ctx: any = await getCtx();
      ctx[getActionKey(keyPrefix)] = new EventType(arg);
      save(ctx);
    }
  });
};

export default handleTypeWithEnter;
