(function() {
  'use strict';

  angular
    .module('klassroom')
    .factory('CoursesList', CoursesList);

  function CoursesList () {
    var coursesList = [
      {
        title: 'Architectural Design',
        author: 'Louis Gray',
        time: '80',
        description: 'If you’re a designer, product person or developer, you’re probably already doing some UX whether you know it or not. Light on theory and heavy on practice, this course will help you formalize your instincts into a structured design process and documentation.',
        funded: '19',
        pledged: '2974',
        days: '24'
      },

      {
        title: 'Architectural Design',
        author: 'Louis Gray',
        time: '80',
        description: 'If you’re a designer, product person or developer, you’re probably already doing some UX whether you know it or not. Light on theory and heavy on practice, this course will help you formalize your instincts into a structured design process and documentation.',
        funded: '19',
        pledged: '2974',
        days: '24'
      },

      {
        title: 'Architectural Design',
        author: 'Louis Gray',
        time: '80',
        description: 'If you’re a designer, product person or developer, you’re probably already doing some UX whether you know it or not. Light on theory and heavy on practice, this course will help you formalize your instincts into a structured design process and documentation.',
        funded: '19',
        pledged: '2974',
        days: '24'
      },

      {
        title: 'Architectural Design',
        author: 'Louis Gray',
        time: '80',
        description: 'If you’re a designer, product person or developer, you’re probably already doing some UX whether you know it or not. Light on theory and heavy on practice, this course will help you formalize your instincts into a structured design process and documentation.',
        funded: '19',
        pledged: '2974',
        days: '24'
      },

      {
        title: 'Architectural Design',
        author: 'Louis Gray',
        time: '80',
        description: 'If you’re a designer, product person or developer, you’re probably already doing some UX whether you know it or not. Light on theory and heavy on practice, this course will help you formalize your instincts into a structured design process and documentation.',
        funded: '19',
        pledged: '2974',
        days: '24'
      },

      {
        title: 'Architectural Design',
        author: 'Louis Gray',
        time: '80',
        description: 'If you’re a designer, product person or developer, you’re probably already doing some UX whether you know it or not. Light on theory and heavy on practice, this course will help you formalize your instincts into a structured design process and documentation.',
        funded: '19',
        pledged: '2974',
        days: '24'
      }
    ];

    return {
      coursesList
    }
  }
})();