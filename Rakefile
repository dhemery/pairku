require 'rake/clean'
require 'spec/rake/spectask'

$report_dir = 'reports'

desc "Run acceptance tests."
task :at => [:temp_dirs] do
    sh "pybot -d #{$report_dir} atest"
end

CLEAN.include $report_dir

task :default => [:test]

desc "Run unit tests for client."
task :jspec => [:temp_dirs] do
    sh "jspec run --rhino unit/client/suite/rhino.js"
end

desc "Run unit tests for server."
Spec::Rake::SpecTask.new(:rspec => [:temp_dirs]) do |t|
    t.spec_files = ["unit/server"]
    t.spec_opts = [
        "-c",
        "-f h:#{$report_dir}/spec.html",
        "-f specdoc",
        ]
end

directory $report_dir

namespace "server" do
    desc "Run the server in the background."
    task :bg => [:temp_dirs] do
        %x{shotgun -p 4567 app/server.rb &> reports/server.log &}
    end

    desc "Run the server in the foreground."
    task :fg => [:temp_dirs] do
        %x{shotgun -p 4567 app/server.rb &> reports/server.log}
    end
end

task :temp_dirs => [$report_dir]

desc "Run all unit and acceptance tests (default task)."
task :test => [:ut, :at]

desc "Run all unit tests."
task :ut => [:jspec, :rspec]

