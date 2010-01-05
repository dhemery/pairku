require 'rake/clean'
require 'spec/rake/spectask'

$report_dir = 'reports'

############################################################
#
#   Test Tasks:
#
#       test            All tests (unit and acceptance).
# 
#       at              Acceptance tests.
# 
#       ut              Unit tests.
#
#   Utility Tasks:
#
#       clean           Removes temporary files.
# 
#       server:start    Starts the server app in the
#                       background.
#
############################################################

task :default => [:test]

task :test => [:ut, :at]
task :at => [:cuke, :robot]
task :ut => [:jspec, :rspec]

task :temp_dirs => [$report_dir]
CLEAN.include $report_dir

task :cuke => [:temp_dirs] do
end

task :jspec => [:temp_dirs] do
    sh "jspec run --rhino test/unit/js/spec.rhino.js"
end

directory $report_dir

task :robot => [:temp_dirs] do
    sh "pybot -d #{$report_dir} test/functional"
end

task :rspec => [:temp_dirs]
Spec::Rake::SpecTask.new(:rspec) do |t|
    t.spec_files = ["test/unit"]
    t.spec_opts = [
        "-c",
        "-f h:#{$report_dir}/spec.html",
        "-f specdoc",
        ]
end

namespace "server" do
    task :start => [:temp_dirs] do
        %x{shotgun -p 4567 app/server.rb &> reports/server.log &}
    end
end
