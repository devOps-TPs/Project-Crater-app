<?php

namespace Crater\Http\Controllers\V1\Admin\Payment;

use Crater\Http\Controllers\Controller;
use Crater\Http\Requests\SendPaymentRequest;
use Crater\Models\Payment;

class SendPaymentController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(SendPaymentRequest $request, Payment $payment)
    {
        $this->authorize('send payment', $payment);

        $response = $payment->send($request->all());

        return response()->json($response);
    }
}
