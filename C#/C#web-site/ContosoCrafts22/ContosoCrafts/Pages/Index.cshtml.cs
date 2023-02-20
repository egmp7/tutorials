using ContosoCrafts.Models;
using ContosoCrafts.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ContosoCrafts.Pages;


public class IndexModel : PageModel
{
    // Properties
    private readonly ILogger<IndexModel> _logger;

    public JsonFileProductService ProductService { get; }

    public IEnumerable<Product>? Products { get; private set; }

    // Constructor

    public IndexModel(ILogger<IndexModel> logger,
        JsonFileProductService productService)
    {
        _logger = logger;
        ProductService = productService;
    }

    // Get Products

    public void OnGet() => Products = ProductService.GetProducts();
}

