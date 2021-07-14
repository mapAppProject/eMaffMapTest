using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Tm2TestAppService.Models;

namespace Tm2TestAppService.Controllers
{
    public class NouchisController : Controller
    {
        private SampleDatabaseEntities db = new SampleDatabaseEntities();

        // GET: Nouchis
        public ActionResult Index()
        {
            return View(db.NouchiSet.ToList());
        }

        // GET: Nouchis/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Nouchi nouchi = db.NouchiSet.Find(id);
            if (nouchi == null)
            {
                return HttpNotFound();
            }
            return View(nouchi);
        }

        // GET: Nouchis/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Nouchis/Create
        // 過多ポスティング攻撃を防止するには、バインド先とする特定のプロパティを有効にしてください。
        // 詳細については、https://go.microsoft.com/fwlink/?LinkId=317598 をご覧ください。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "MapDataID,Chiban,Sakuki,SakumotsuMei,Chimoku,Area")] Nouchi nouchi)
        {
            if (ModelState.IsValid)
            {
                db.NouchiSet.Add(nouchi);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(nouchi);
        }

        // GET: Nouchis/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Nouchi nouchi = db.NouchiSet.Find(id);
            if (nouchi == null)
            {
                return HttpNotFound();
            }
            return View(nouchi);
        }

        // POST: Nouchis/Edit/5
        // 過多ポスティング攻撃を防止するには、バインド先とする特定のプロパティを有効にしてください。
        // 詳細については、https://go.microsoft.com/fwlink/?LinkId=317598 をご覧ください。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "MapDataID,Chiban,Sakuki,SakumotsuMei,Chimoku,Area")] Nouchi nouchi)
        {
            if (ModelState.IsValid)
            {
                db.Entry(nouchi).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(nouchi);
        }

        // GET: Nouchis/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Nouchi nouchi = db.NouchiSet.Find(id);
            if (nouchi == null)
            {
                return HttpNotFound();
            }
            return View(nouchi);
        }

        // POST: Nouchis/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Nouchi nouchi = db.NouchiSet.Find(id);
            db.NouchiSet.Remove(nouchi);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
