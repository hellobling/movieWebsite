module.exports = function(grunt){

    grunt.initConfig({
    watch: {
      ejs: {
        files: ['views/**'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['public/js/**', 'models/**/*.js', 'schemas/**/*.js'],
        //tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      uglify: {
        files: ['public/**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['public/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['public/libs/**/*.js']
      },
      all: ['public/js/*.js', 'test/**/*.js', 'app/**/*.js']
    },

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'public/build/index.css': 'public/less/index.less'
        }
      }
    },

    uglify: {
      development: {
        files: {
          'public/build/admin.min.js': 'public/js/admin.js',
          'public/build/detail.min.js': [
            'public/js/detail.js'
          ]
        }
      }
    },

    nodemon: {
      dev: {
        options: {
          file: 'app.js',
          args: [],
          ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
          watchedExtensions: ['js'],
          watchedFolders: ['./'],
          debug: true,
          delayTime: 1,
          env: {
            PORT: 3000
          },
          cwd: __dirname
        }
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['test/**/*.js']
    },

    concurrent: {
      tasks: ['nodemon', 'watch', 'less', 'uglify', 'jshint'],
      options: {
        logConcurrentOutput: true
      }
    }
  })

    //只要有文件添加、修改、删除就会重新执行任务
    grunt.loadNpmTasks('grunt-contrib-watch');
    //时时监听入口文件app.js，当入口文件改动会自动重启
    grunt.loadNpmTasks('grount-nodemon')
    //针对慢任务开发的插件，例如sass、less等，优化他们构建的实时间
    grunt.loadNpmTasks('grount-concurrent')

    grunt.option('force', true)
    grunt.registerTask('default', ['concurrent'])

}