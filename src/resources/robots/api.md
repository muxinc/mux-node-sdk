# Robots

## Jobs

Types:

- <code><a href="./src/resources/robots/jobs/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/robots/jobs/jobs.ts">JobCancelResponse</a></code>

Methods:

- <code title="get /robots/v1/jobs">client.robots.jobs.<a href="./src/resources/robots/jobs/jobs.ts">list</a>({ ...params }) -> JobListResponsesBasePage</code>
- <code title="delete /robots/v1/jobs/{JOB_ID}">client.robots.jobs.<a href="./src/resources/robots/jobs/jobs.ts">delete</a>(jobID) -> void</code>
- <code title="post /robots/v1/jobs/{JOB_ID}/cancel">client.robots.jobs.<a href="./src/resources/robots/jobs/jobs.ts">cancel</a>(jobID) -> JobCancelResponse</code>

### AskQuestions

Types:

- <code><a href="./src/resources/robots/jobs/ask-questions.ts">AskQuestionCreateResponse</a></code>
- <code><a href="./src/resources/robots/jobs/ask-questions.ts">AskQuestionRetrieveResponse</a></code>

Methods:

- <code title="post /robots/v1/jobs/ask-questions">client.robots.jobs.askQuestions.<a href="./src/resources/robots/jobs/ask-questions.ts">create</a>({ ...params }) -> AskQuestionCreateResponse</code>
- <code title="get /robots/v1/jobs/ask-questions/{JOB_ID}">client.robots.jobs.askQuestions.<a href="./src/resources/robots/jobs/ask-questions.ts">retrieve</a>(jobID) -> AskQuestionRetrieveResponse</code>

### GenerateChapters

Types:

- <code><a href="./src/resources/robots/jobs/generate-chapters.ts">GenerateChapterCreateResponse</a></code>
- <code><a href="./src/resources/robots/jobs/generate-chapters.ts">GenerateChapterRetrieveResponse</a></code>

Methods:

- <code title="post /robots/v1/jobs/generate-chapters">client.robots.jobs.generateChapters.<a href="./src/resources/robots/jobs/generate-chapters.ts">create</a>({ ...params }) -> GenerateChapterCreateResponse</code>
- <code title="get /robots/v1/jobs/generate-chapters/{JOB_ID}">client.robots.jobs.generateChapters.<a href="./src/resources/robots/jobs/generate-chapters.ts">retrieve</a>(jobID) -> GenerateChapterRetrieveResponse</code>

### FindKeyMoments

Types:

- <code><a href="./src/resources/robots/jobs/find-key-moments.ts">FindKeyMomentCreateResponse</a></code>
- <code><a href="./src/resources/robots/jobs/find-key-moments.ts">FindKeyMomentRetrieveResponse</a></code>

Methods:

- <code title="post /robots/v1/jobs/find-key-moments">client.robots.jobs.findKeyMoments.<a href="./src/resources/robots/jobs/find-key-moments.ts">create</a>({ ...params }) -> FindKeyMomentCreateResponse</code>
- <code title="get /robots/v1/jobs/find-key-moments/{JOB_ID}">client.robots.jobs.findKeyMoments.<a href="./src/resources/robots/jobs/find-key-moments.ts">retrieve</a>(jobID) -> FindKeyMomentRetrieveResponse</code>

### Moderate

Types:

- <code><a href="./src/resources/robots/jobs/moderate.ts">ModerateCreateResponse</a></code>
- <code><a href="./src/resources/robots/jobs/moderate.ts">ModerateRetrieveResponse</a></code>

Methods:

- <code title="post /robots/v1/jobs/moderate">client.robots.jobs.moderate.<a href="./src/resources/robots/jobs/moderate.ts">create</a>({ ...params }) -> ModerateCreateResponse</code>
- <code title="get /robots/v1/jobs/moderate/{JOB_ID}">client.robots.jobs.moderate.<a href="./src/resources/robots/jobs/moderate.ts">retrieve</a>(jobID) -> ModerateRetrieveResponse</code>

### Summarize

Types:

- <code><a href="./src/resources/robots/jobs/summarize.ts">SummarizeCreateResponse</a></code>
- <code><a href="./src/resources/robots/jobs/summarize.ts">SummarizeRetrieveResponse</a></code>

Methods:

- <code title="post /robots/v1/jobs/summarize">client.robots.jobs.summarize.<a href="./src/resources/robots/jobs/summarize.ts">create</a>({ ...params }) -> SummarizeCreateResponse</code>
- <code title="get /robots/v1/jobs/summarize/{JOB_ID}">client.robots.jobs.summarize.<a href="./src/resources/robots/jobs/summarize.ts">retrieve</a>(jobID) -> SummarizeRetrieveResponse</code>

### TranslateCaptions

Types:

- <code><a href="./src/resources/robots/jobs/translate-captions.ts">TranslateCaptionCreateResponse</a></code>
- <code><a href="./src/resources/robots/jobs/translate-captions.ts">TranslateCaptionRetrieveResponse</a></code>

Methods:

- <code title="post /robots/v1/jobs/translate-captions">client.robots.jobs.translateCaptions.<a href="./src/resources/robots/jobs/translate-captions.ts">create</a>({ ...params }) -> TranslateCaptionCreateResponse</code>
- <code title="get /robots/v1/jobs/translate-captions/{JOB_ID}">client.robots.jobs.translateCaptions.<a href="./src/resources/robots/jobs/translate-captions.ts">retrieve</a>(jobID) -> TranslateCaptionRetrieveResponse</code>

## Workflows
