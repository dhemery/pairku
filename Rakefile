require 'rake/clean'
require 'spec/rake/spectask'

$report_dir = 'reports'

############################################################
#
#   Test Task:
#
#       all             All tests (unit and acceptance)
# 
#       at(default)     Acceptance tests
# 
#       ut              Unit tests.
#
#   Utility Tasks:
#
#       clean           Removes temporary files
#                       (account file and test reports)
# 
#       start           Starts the server app in the
#                       background.
#
############################################################

task :default => [:at]

task :all => [:ut, :at]
task :at => [:temp_dirs]
task :server => [:temp_dirs]
task :temp_dirs => [$report_dir]
task :ut => [:temp_dirs]

task :at do
    sh "pybot -d #{$report_dir} test/functional"
end

CLEAN.include $report_dir

directory $report_dir

task :server do
    %x{ruby src/server.rb &> reports/server.log &}
end

Spec::Rake::SpecTask.new(:ut) do |t|
    t.spec_files = ["test/unit"]
    t.spec_opts = [
        "-c",
        "-f h:#{$report_dir}/spec.html",
        "-f specdoc",
        ]
end
