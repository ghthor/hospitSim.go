include $(GOROOT)/src/Make.inc

TARG=hospitSim.app
GOFILES=\
	main.go\
	output.go\

include $(GOROOT)/src/Make.cmd
