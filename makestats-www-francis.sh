#!/bin/bash
# Script de génération de stats à partir des logs apache.
# Pour utiliser ce script, goaccess doit etre installé.

SITE="www.francis.pugnere.fr"
OUTDIR="/home/hebergement/auto/pugnere.fr/webstats"
NBDAYS=3
MOI=31
FILTRE="78.192.65.9"

echo "récupération des stats du site \"$SITE\" dans le dossier \"$OUTDIR\""

find /home/hebergement/log/$SITE/ -name \*-access.log -mtime -$NBDAYS -exec grep -v $FILTRE {} \; | goaccess > $OUTDIR/$SITE-Jour.html
find /home/hebergement/log/$SITE/ -name \*-access.log -mtime -$MOI -exec grep -v $FILTRE {} \; | goaccess > $OUTDIR/$SITE-Mois.html

#/etc/goaccess.conf:
#log-format %h %^[%d:%^] "%m %U %H" %s %b "%R" "%u"
#date-format %d/%b/%Y
