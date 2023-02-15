import {NearAccount, Worker} from 'near-workspaces';
import anyTest, {TestFn} from 'ava';

export const test = anyTest as TestFn<{
  worker: Worker;
  accounts: Record<string, NearAccount>;
}>;
