import os
import Options
from os.path import exists
from shutil import copy2 as copy

TARGET = 'zlib_bindings'
TARGET_FILE = '%s.node' % TARGET
dest = 'lib/%s' % TARGET_FILE

def set_options(opt):
  opt.tool_options("compiler_cxx")

def configure(conf):
  conf.check_tool("compiler_cxx")
  conf.check_tool("node_addon")
  if not conf.check(lib="libz", libpath=['/usr/lib'], uselib_store="ZLIB"):
    conf.fatal('Missing zlib');

  linkflags = []
  if os.environ.has_key('LINKFLAGS'):
    linkflags.extend(os.environ['LINKFLAGS'].split(' '))
  conf.env.append_value("LINKFLAGS", linkflags)

def build(bld):
  obj = bld.new_task_gen("cxx", "shlib", "node_addon")
  obj.cxxflags = ["-g", "-D_FILE_OFFSET_BITS=64", "-D_LARGEFILE_SOURCE", "-Wall"]
  obj.target = TARGET
  obj.source = "src/node-zlib.cc"
  obj.uselib = "ZLIB"

def shutdown():
  if Options.commands['clean']:
      if exists(TARGET_FILE):
        unlink(TARGET_FILE)
  else:
      # node 0.4.x
      if exists('build/default/%s' % TARGET_FILE):
          copy('build/default/%s' % TARGET_FILE,dest)
      # node 0.6.x
      elif exists('build/Release/%s' % TARGET_FILE):
          copy('build/Release/%s' % TARGET_FILE,dest)
