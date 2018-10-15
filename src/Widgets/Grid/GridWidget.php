<?php

namespace Ceres\Widgets\Grid;

use Ceres\Widgets\Helper\BaseWidget;

class GridWidget extends BaseWidget
{
    protected $template = "Ceres::Widgets.Grid.GridWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $columns = [
            [
                "id" => "first",
                "width" => $widgetSettings["firstColumn"]["width"]["mobile"] ?? "6",
            ],
            [
                "id" => "second",
                "width" => $widgetSettings["secondColumn"]["width"]["mobile"] ?? "6",
            ]
        ];

        foreach( $widgetSettings["columns"]["mobile"] as $column )
        {
            $columns[] = $column;
        }

        return [
            'columns' => $columns
        ];
    }
}