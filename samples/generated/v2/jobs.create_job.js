// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, job, jobId) {
  // [START run_v2_generated_Jobs_CreateJob_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location and project in which this Job should be created.
   *  Format: projects/{project}/locations/{location}, where {project} can be
   *  project id or number.
   */
  // const parent = 'abc123'
  /**
   *  Required. The Job instance to create.
   */
  // const job = {}
  /**
   *  Required. The unique identifier for the Job. The name of the job becomes
   *  {parent}/jobs/{job_id}.
   */
  // const jobId = 'abc123'
  /**
   *  Indicates that the request should be validated and default values
   *  populated, without persisting the request or creating any resources.
   */
  // const validateOnly = true

  // Imports the Run library
  const {JobsClient} = require('@google-cloud/run').v2;

  // Instantiates a client
  const runClient = new JobsClient();

  async function callCreateJob() {
    // Construct request
    const request = {
      parent,
      job,
      jobId,
    };

    // Run request
    const [operation] = await runClient.createJob(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateJob();
  // [END run_v2_generated_Jobs_CreateJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
