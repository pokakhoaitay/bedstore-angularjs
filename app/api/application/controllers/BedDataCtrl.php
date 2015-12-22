
<?php
defined('BASEPATH') OR exit('No direct script access allowed');
include APPPATH.'models/JsonResponse.php';

class BedDataCtrl extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Bed_Data');

        $this->bedData = new Bed_Data();
    }

    private $bedData;

    public function getAll()
    {
        try {
            $query = $this->bedData->getAll();
            echo json_encode(new JsonResponse(200,$query));
        } catch (Exception $error) {
            echo json_encode(new JsonResponse(500));
        }
    }

    public function get($id)
    {
        try {
            $query = $this->bedData->get($id);
            echo json_encode(new JsonResponse(200,$query));
        } catch (Exception $e) {
            echo json_encode(new JsonResponse(500));
        }

    }
}