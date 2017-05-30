// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  "use strict";
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed',
          sourcemap: 'none',
          //loadPath: require('node-bourbon').includePaths
        },
        files: {                         // Dictionary of files
          'dist/css/app.css': 'src/css/app.scss',
          'dist/css/styleVertical.css': 'src/css/styleVertical.scss',
          'dist/css/styleMobile.css': 'src/css/styleMobile.scss'
        }
      }
    },

    // bake: {
    //     build: {
    //         options: {},
    //         files: {
    //           "dist/index.html": "src/index.html",
    //           "dist/includes/landingPage.html": "src/includes/landingPage.html"
    //         }
    //     }
    // },

    uglify: {
      options: {
        sourceMap: false
      },
      my_target: {
        files: {
          'dist/js/getnav.js': 'src/js/getNav.js',
          'dist/js/getdata.js': 'src/js/getdata_new.js',
          'dist/js/main.js': 'src/js/main.js',
          'dist/js/kiiNav.js': 'src/js/kiiNav.js',
          'dist/js/postLoad.js': 'src/js/postLoad.js',
          'dist/js/kochFacts.js': 'src/js/kochFacts.js',
          'dist/js/audio.js': 'src/js/audio.js'
        }
      }
    },


    copy: {
      files: {
        cwd: 'src/css',  // set working folder / root to copy
        src: 'pace.css',           // copy all files and subfolders
        dest: 'dist/css/',    // destination folder
        expand: true           // required when using cwd
      },
      html: {
        cwd: 'src',
        src: 'index.html',
        dest: 'dist/',
        expand: true
      },
      includes: {
        cwd: 'src/includes',
        src: ['landingPage.html', 'kiiNav.html'],
        dest: 'dist/includes/',
        expand: true
      },
      json: {
        cwd: 'src/json',
        src: 'factoids.json',
        dest: 'dist/json/',
        expand: true
      },
      js: {
        cwd: 'src/js',
        src: 'pace.min.js',
        dest: 'dist/js/',
        expand: true
      }
    },

    watch: { 
      sass: {
        files: ['src/css/*.scss'],
        tasks: ['sass'],
        options : { nospawn : true, relative:true }
      },
      // bake: {
      //   files: ['src/**/*.html', 'src/*.html', 'includes/*.html'],
      //   tasks: ['bake']
      // },
      copy: {
        files: ['src/css/pace.css', 'src/css/pace.css', 'src/index.html', 'src/includes/landingPage.html', 'src/json/factoids.json'],
        tasks: ['copy']
      },
      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      }
    },

    touch: {
      target: ['*.html']
    }



     

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-touch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
