﻿using System.Web.Mvc;
using Orchard.Core.Navigation.Helpers;

namespace Orchard.Core.Settings.Helpers {
    public static class AdminBreadcrumbsHtmlHelper {
        public static void AdminBreadcrumbs(this HtmlHelper htmlHelper, object context = null) {
            htmlHelper.AdminBreadcrumbs(Settings.AdminBreadcrumbs.Name, context);
        }
    }
}