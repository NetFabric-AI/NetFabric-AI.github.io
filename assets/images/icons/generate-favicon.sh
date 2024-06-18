#!/bin/bash

# directory containing this script
BASEDIR="$( dirname "$0")"

convert -background transparent -define 'icon:auto-resize=16,24,32,64' favicon.svg netfabric-favicon.ico
convert -background transparent -define 'icon:auto-resize=16,24,32,64' favicon-dark-mode.svg netfabric-favicon-dark.ico