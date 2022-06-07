<?php

namespace Crater\Http\Controllers\V1\Admin\Estimate;

use Crater\Http\Controllers\Controller;
use Crater\Http\Requests\SendEstimatesRequest;
use Crater\Models\Estimate;
use Illuminate\Mail\Markdown;

class SendEstimatePreviewController extends Controller
{
    /**
    * Handle the incoming request.
    *
    * @param  \Crater\Http\Requests\SendEstimatesRequest  $request
    * @return \Illuminate\Http\JsonResponse
    */
    public function __invoke(SendEstimatesRequest $request, Estimate $estimate)
    {
        $this->authorize('send estimate', $estimate);

        $markdown = new Markdown(view(), config('mail.markdown'));

        $data = $estimate->sendEstimateData($request->all());
        $data['url'] = $estimate->estimatePdfUrl;

        return $markdown->render('emails.send.estimate', ['data' => $data]);
    }
}
