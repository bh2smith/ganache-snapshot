#!/bin/bash

set -e

STATE_BEFORE_SNAPSHOT=$(truffle exec test/cli/read_contract.js)
SNAP_ID=$(truffle run snapshot make)

STATE_AFTER_WRITE=$(truffle exec test/cli/write_contract.js)

truffle run snapshot revert $SNAP_ID
STATE_AFTER_REVERT=$(truffle exec test/cli/read_contract.js)