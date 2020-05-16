#!/bin/bash

nginx &&
pm2-runtime start /opt/rpgme/Application.js --name rpgme-server