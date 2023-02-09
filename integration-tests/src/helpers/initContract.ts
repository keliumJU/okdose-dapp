import {Worker} from 'near-workspaces';
import {test} from './initTest';

export default function initContract(contractAccount: string, blockId: string) {
  // Init the worker and start a Sandbox server
  test.beforeEach(async (t) => {
    // Init the worker and start a Sandbox server
    const worker = await Worker.init();

    // Using contract from testnet
    const root = worker.rootAccount;

    const contract = await root.importContract({
      testnetContract: contractAccount,
      blockId: blockId,
      withData: false
    });
    // Save state for test runs, it is unique for each test
    t.context.worker = worker;
    t.context.accounts = {root, contract};
  });

  test.afterEach.always(async (t) => {
    await t.context.worker.tearDown().catch((error) => {
      new Error(`Failed to tear down the worker: ${error}`);
    });
  });
}
