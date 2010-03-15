include $(GOROOT)/src/Make.$(GOARCH)

TARG=ChangeMe.app
GOFILES=\
	main.go\

include $(GOROOT)/src/Make.cmd
