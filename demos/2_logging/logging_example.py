import logging
import sys

import hydra

# A logger for this file
log = logging.getLogger(__name__)


@hydra.main()
def experiment(cfg):
    log.info("Info level message")
    log.debug("Debug level message")


if __name__ == "__main__":
    sys.exit(experiment())
