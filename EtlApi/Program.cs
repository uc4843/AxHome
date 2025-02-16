Tester.TestSourceConnection();
Tester.TestTargetConnection();
StorageHelper.OldStorageUrl = "https://storage.axhome.ir";
Cloud.CloudConfig.Configure();

// new AccountsImporter().Import();
// new BlogImporter().Import();
// new ContentsImporter().Import();
// new NavigationImporter().Import();
// new FormsImporter().Import();
// new QuestionsImporter().Import();
// new GalleriesImporter().Import();
new GeoImporter().Import();
// new PropertiesImporter().Import();
// TaxonomyHelper.ImportTaxonomySeo();
// SeoHelper.ImportRedirects();
// SeoHelper.ImportGones();
