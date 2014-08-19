'use strict';

var request = require('request'),
	Promise = require('promise'),
	all = require('then-all'),
	config = require('../core/config');

module.exports = {
	fetchJobs: function(){
		var self = this;
		return new Promise(function(resolve){
			self.fetchJobList().then(function(list){
				var promises = [], i = 0, job, jobs = [];
				for (i = 0; i < list.length; i++){
					promises.push(self.fetchJobDetail(list[i].shortcode));
				}

				all(promises).then(function(details){
					for (i = 0; i < details.length; i++){
						job = details[i];
						jobs.push({
							url: 'http://strangelove.workable.com/j/' + job.shortcode,
							title: job.title,
							description: job.description
						});
					}
					resolve(jobs);
				});
			});
		});
	},

	fetchJobList: function(){
		return new Promise(function(resolve, reject){
			request({
				json: true,
				url: config.workable.api + '/accounts/' + config.workable.account + '/jobs?access_token=' + config.workable.key
			}, function(err, response, body){
				if (err) reject(err);
				else resolve(body.jobs);
			});
		});
	},

	fetchJobDetail: function(shortCode){
		return new Promise(function(resolve, reject){
			request({
				json: true,
				url: config.workable.api + '/accounts/' + config.workable.account + '/jobs/' + shortCode + '?access_token=' + config.workable.key
			}, function(err, response, body){
				if (err) reject(err);
				else resolve(body);
			});
		});
	}
};
