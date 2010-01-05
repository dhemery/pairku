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

task :all => [:ut, :at]

task :at => [:temp_dirs] do
    sh "pybot -d #{$report_dir} atest"
end

task :default => [:at]

require 'spec/rake/spectask'
task :ut => [:temp_dirs]
Spec::Rake::SpecTask.new(:ut) do |t|
    t.spec_files = ["test/unit"]
    t.spec_opts = [
        "-c",
        "-f h:#{$report_dir}/spec.html",
        "-f specdoc",
        ]
end

task :server => [:temp_dirs]

task :server do
    %x{ruby src/server.rb &> reports/server.log &}
end

task :temp_dirs => [$report_dir]

directory $report_dir

require 'rake/clean'
CLEAN.include $report_dir
