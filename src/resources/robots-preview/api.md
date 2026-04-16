# RobotsPreview

## Jobs

Types:

- <code><a href="./src/resources/robots-preview/jobs/jobs.ts">JobError</a></code>
- <code><a href="./src/resources/robots-preview/jobs/jobs.ts">JobStatus</a></code>
- <code><a href="./src/resources/robots-preview/jobs/jobs.ts">JobSummary</a></code>

Methods:

- <code title="get /robots/v0/jobs">client.robotsPreview.jobs.<a href="./src/resources/robots-preview/jobs/jobs.ts">list</a>({ ...params }) -> JobSummariesBasePage</code>
- <code title="post /robots/v0/jobs/{JOB_ID}/cancel">client.robotsPreview.jobs.<a href="./src/resources/robots-preview/jobs/jobs.ts">cancel</a>(jobID) -> JobSummary</code>

### AskQuestions

Types:

- <code><a href="./src/resources/robots-preview/jobs/ask-questions.ts">AskQuestionsJob</a></code>
- <code><a href="./src/resources/robots-preview/jobs/ask-questions.ts">AskQuestionsJobOutputs</a></code>
- <code><a href="./src/resources/robots-preview/jobs/ask-questions.ts">AskQuestionsJobParameters</a></code>

Methods:

- <code title="post /robots/v0/jobs/ask-questions">client.robotsPreview.jobs.askQuestions.<a href="./src/resources/robots-preview/jobs/ask-questions.ts">create</a>({ ...params }) -> AskQuestionsJob</code>
- <code title="get /robots/v0/jobs/ask-questions/{JOB_ID}">client.robotsPreview.jobs.askQuestions.<a href="./src/resources/robots-preview/jobs/ask-questions.ts">retrieve</a>(jobID) -> AskQuestionsJob</code>

### GenerateChapters

Types:

- <code><a href="./src/resources/robots-preview/jobs/generate-chapters.ts">GenerateChaptersJob</a></code>
- <code><a href="./src/resources/robots-preview/jobs/generate-chapters.ts">GenerateChaptersJobOutputs</a></code>
- <code><a href="./src/resources/robots-preview/jobs/generate-chapters.ts">GenerateChaptersJobParameters</a></code>

Methods:

- <code title="post /robots/v0/jobs/generate-chapters">client.robotsPreview.jobs.generateChapters.<a href="./src/resources/robots-preview/jobs/generate-chapters.ts">create</a>({ ...params }) -> GenerateChaptersJob</code>
- <code title="get /robots/v0/jobs/generate-chapters/{JOB_ID}">client.robotsPreview.jobs.generateChapters.<a href="./src/resources/robots-preview/jobs/generate-chapters.ts">retrieve</a>(jobID) -> GenerateChaptersJob</code>

### FindKeyMoments

Types:

- <code><a href="./src/resources/robots-preview/jobs/find-key-moments.ts">FindKeyMomentsJob</a></code>
- <code><a href="./src/resources/robots-preview/jobs/find-key-moments.ts">FindKeyMomentsJobOutputs</a></code>
- <code><a href="./src/resources/robots-preview/jobs/find-key-moments.ts">FindKeyMomentsJobParameters</a></code>

Methods:

- <code title="post /robots/v0/jobs/find-key-moments">client.robotsPreview.jobs.findKeyMoments.<a href="./src/resources/robots-preview/jobs/find-key-moments.ts">create</a>({ ...params }) -> FindKeyMomentsJob</code>
- <code title="get /robots/v0/jobs/find-key-moments/{JOB_ID}">client.robotsPreview.jobs.findKeyMoments.<a href="./src/resources/robots-preview/jobs/find-key-moments.ts">retrieve</a>(jobID) -> FindKeyMomentsJob</code>

### Moderate

Types:

- <code><a href="./src/resources/robots-preview/jobs/moderate.ts">ModerateJob</a></code>
- <code><a href="./src/resources/robots-preview/jobs/moderate.ts">ModerateJobOutputs</a></code>
- <code><a href="./src/resources/robots-preview/jobs/moderate.ts">ModerateJobParameters</a></code>

Methods:

- <code title="post /robots/v0/jobs/moderate">client.robotsPreview.jobs.moderate.<a href="./src/resources/robots-preview/jobs/moderate.ts">create</a>({ ...params }) -> ModerateJob</code>
- <code title="get /robots/v0/jobs/moderate/{JOB_ID}">client.robotsPreview.jobs.moderate.<a href="./src/resources/robots-preview/jobs/moderate.ts">retrieve</a>(jobID) -> ModerateJob</code>

### Summarize

Types:

- <code><a href="./src/resources/robots-preview/jobs/summarize.ts">SummarizeJob</a></code>
- <code><a href="./src/resources/robots-preview/jobs/summarize.ts">SummarizeJobOutputs</a></code>
- <code><a href="./src/resources/robots-preview/jobs/summarize.ts">SummarizeJobParameters</a></code>

Methods:

- <code title="post /robots/v0/jobs/summarize">client.robotsPreview.jobs.summarize.<a href="./src/resources/robots-preview/jobs/summarize.ts">create</a>({ ...params }) -> SummarizeJob</code>
- <code title="get /robots/v0/jobs/summarize/{JOB_ID}">client.robotsPreview.jobs.summarize.<a href="./src/resources/robots-preview/jobs/summarize.ts">retrieve</a>(jobID) -> SummarizeJob</code>

### TranslateCaptions

Types:

- <code><a href="./src/resources/robots-preview/jobs/translate-captions.ts">TranslateCaptionsJob</a></code>
- <code><a href="./src/resources/robots-preview/jobs/translate-captions.ts">TranslateCaptionsJobOutputs</a></code>
- <code><a href="./src/resources/robots-preview/jobs/translate-captions.ts">TranslateCaptionsJobParameters</a></code>

Methods:

- <code title="post /robots/v0/jobs/translate-captions">client.robotsPreview.jobs.translateCaptions.<a href="./src/resources/robots-preview/jobs/translate-captions.ts">create</a>({ ...params }) -> TranslateCaptionsJob</code>
- <code title="get /robots/v0/jobs/translate-captions/{JOB_ID}">client.robotsPreview.jobs.translateCaptions.<a href="./src/resources/robots-preview/jobs/translate-captions.ts">retrieve</a>(jobID) -> TranslateCaptionsJob</code>
