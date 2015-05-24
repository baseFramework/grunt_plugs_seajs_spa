/**
 * Gruntfile for Elf Project
 */
'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        watch: {
            transport: {
                files: ['public/tpl/*.tpl', 'public/tpl/component/*.tpl'],
                tasks: ['transport:tpl']
            },
            stylus: {
                files: ['public/stylus/*.styl'],
                tasks: ['stylus']
            }
        },
        jshint: {
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                quotmark: 'single',
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                eqnull: true,
                devel: true,
                white: false
            },
            client: {
                options: {
                    browser: true,
                    predef: ['seajs', 'define']
                },
                src: ['public/**/*.js']
            },
            server: {
                options: {
                    node: true
                },
                src: [
                    '**/*.js',
                    '!public/**/*.js'
                ]
            }
        },
        transport: {
            options: {
                paths: ['public/js/'],
                debug: false
            },
            tpl: {
                files: [{
                    cwd: 'public/',
                    src: [
                        'tpl/**/*.tpl',
                        '!tpl/index.tpl'
                    ],
                    dest: 'public/js/',
                    expand: true
                }]
            },
            js: {
                files: [{
                    cwd: 'public/js',
                    src: [
                        '**/*.js',
                        '!lib/*.js',
                        '!seajs/*.js',
                    ],
                    dest: 'public/compiled/',
                    expand: true
                }]
            }
        },
        stylus: {
            options: {
                paths: ['public/stylus/'],
                compress: false
            },
            css: {
                files: [{
                    cwd: 'public/stylus/',
                    src: '*.styl',
                    dest: 'public/css/',
                    expand: true,
                    ext: '.css'
                }]
            }
        },
        concat: {
            css: {
                src: [
                    'public/css/base.css',
                    'public/css/**/*.css'
                ],
                dest: 'dist/public/css/style.css'
            },
            js: {
                src: [
                    'public/js/lib/es5-safe.js',
                    'public/js/seajs/sea.js',
                    'public/compiled/**/*.js'
                ],
                dest: 'dist/public/js/app.js'
            }
        },
        cssmin: {
            css: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                files: [{
                    expand: true,
                    cwd: 'dist/public/css/',
                    src: ['**/*.css'],
                    dest: 'dist/public/css/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            js: {
                options: {
                    banner: '<%= meta.banner %>\n'
                },
                files: [{
                    expand: true,
                    cwd: 'dist/public/js/',
                    src: ['**/*.js'],
                    dest: 'dist/public/js/',
                    ext: '.min.js'
                }]
            }
        },
        imagemin: {
            img: {
                files: [{
                    expand: true,
                    cwd: 'public/img/',
                    src: ['**/*.png'],
                    dest: 'dist/public/img/'
                }]
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        src: [
                            'conf/**/*.json',
                            'lib/**/*.js',
                            'lib/**/*.node',
                            'public/tpl/**/*.tpl',
                            '*',
                            '!*.release',
                            '!cluster.js',
                            '!Gruntfile.js',
                            '!*.md'
                        ], dest: 'dist/', filter: 'isFile'
                    },
                    {
                        src: ['public/tpl/index.tpl.release'],
                        dest: 'dist/public/tpl/index.tpl'
                    },
                    {
                        src: ['config.js.release'],
                        dest: 'dist/config.js'
                    }
                ]
            },
            img: {
                files: [
                    {src: 'public/img/*', dest: 'dist/'}
                ]
            }
        },
        clean: {
            tpl: ['public/js/tpl/'],
            compiled: ['public/compiled/'],
            dist: ['dist/']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // public tasks
    //grunt.registerTask('test', ['jshint']);
    grunt.registerTask('dev', ['transport', 'stylus', 'concat', 'cssmin', 'copy:img', 'clean:compiled']);
    grunt.registerTask('build', ['transport', 'stylus', 'concat', 'cssmin', 'copy:img', 'uglify', 'imagemin', 'copy:dist', 'clean:compiled']);
    grunt.registerTask('default', ['clean', 'build']);
};