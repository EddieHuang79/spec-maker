FROM ubuntu:18.04
RUN apt-get update \
    && apt-get install -y \
        telnet \
        net-tools \
        curl \
        wget \
        iputils-ping \
        redis-tools \
        mysql-client
CMD [ "/bin/bash", "-c", "tail -f /dev/null" ]

