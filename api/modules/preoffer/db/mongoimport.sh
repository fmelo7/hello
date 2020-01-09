#!/bin/bash
mongoimport -d hello -c preoffers --type csv --file preoffers.csv --fields=msisdn