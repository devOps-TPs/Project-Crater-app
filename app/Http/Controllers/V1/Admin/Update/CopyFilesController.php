<?php

namespace Crater\Http\Controllers\V1\Admin\Update;

use Crater\Http\Controllers\Controller;
use Crater\Space\Updater;
use Illuminate\Http\Request;

class CopyFilesController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        if ((! $request->user()) || (! $request->user()->isOwner())) {
            return response()->json([
                'success' => false,
                'message' => 'You are not allowed to update this app.'
            ], 401);
        }

        $request->validate([
            'path' => 'required',
        ]);

        $path = Updater::copyFiles($request->path);

        return response()->json([
            'success' => true,
            'path' => $path,
        ]);
    }
}
