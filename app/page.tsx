export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              SSA Trading
            </h1>
            <p className="text-sm text-slate-500">
              Main Company • Water Business Management System
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Manager
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Dashboard
          </h2>

          <p className="mt-1 text-slate-500">
            Overview of SSA Trading and its subsidiary companies
          </p>
        </div>

        {/* Summary Cards */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Today's Sales"
            value="৳ 0"
            description="Total sales today"
          />

          <DashboardCard
            title="Today's Collection"
            value="৳ 0"
            description="Money collected today"
          />

          <DashboardCard
            title="Water Delivered"
            value="0 Jar"
            description="Today's deliveries"
          />

          <DashboardCard
            title="Total Due"
            value="৳ 0"
            description="Total outstanding"
          />
        </section>

        {/* Subsidiary Companies */}
        <section className="mt-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Subsidiary Companies
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Companies operating under SSA Trading
              </p>
            </div>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              + Add Sub Company
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Current Company */}
            <CompanyCard
              name="AQUA DROP"
              description="Water Business Company"
              status="Active"
            />

            {/* Future Company Placeholder */}
            <AddCompanyCard />
          </div>
        </section>

        {/* AQUA DROP Structure */}
        <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-6">
            <p className="text-sm font-medium text-blue-600">
              CURRENT SUB COMPANY
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              AQUA DROP
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Manage customer groups, dealers, employees and company accounts
            </p>
          </div>

          {/* Customer Groups */}
          <div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-slate-900">
                Customer Groups
              </h4>

              <p className="text-sm text-slate-500">
                Customer lists maintained under AQUA DROP
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CustomerGroupCard
                name="AQUA"
                description="AQUA customer list"
              />

              <CustomerGroupCard
                name="AFBI"
                description="AFBI customer list"
              />

              <AddGroupCard />
            </div>
          </div>

          {/* Other AQUA DROP Accounts */}
          <div className="mt-8">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-slate-900">
                AQUA DROP Management
              </h4>

              <p className="text-sm text-slate-500">
                Other accounts and operations of this company
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ManagementCard title="Dealers" />
              <ManagementCard title="Employees" />
              <ManagementCard title="Expenses" />
              <ManagementCard title="Bills & Reports" />
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Customer Management */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Customer Management
            </h3>

            <div className="mt-4 space-y-2">
              <ActionButton text="Customer List" />
              <ActionButton text="Add Customer" />
              <ActionButton text="Customer Statement" />
              <ActionButton text="Customer Due" />
            </div>
          </div>

          {/* Financial Management */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Financial Management
            </h3>

            <div className="mt-4 space-y-2">
              <ActionButton text="Daily Transactions" />
              <ActionButton text="Payments & Collections" />
              <ActionButton text="Company Expenses" />
              <ActionButton text="Monthly Reports" />
            </div>
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Recent Transactions
              </h3>

              <p className="text-sm text-slate-500">
                Latest business activities
              </p>
            </div>

            <button className="rounded-lg border px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              View All
            </button>
          </div>

          <div className="rounded-xl bg-slate-50 p-8 text-center">
            <p className="text-sm text-slate-500">
              No transactions yet
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

/* Dashboard Card */

function DashboardCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
}

/* Company Card */

function CompanyCard({
  name,
  description,
  status,
}: {
  name: string;
  description: string;
  status: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xl font-bold text-slate-900">
            {name}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
          {status}
        </span>
      </div>

      <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
        Open Company
      </button>
    </div>
  );
}

/* Add Company */

function AddCompanyCard() {
  return (
    <button className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-left transition hover:border-blue-400 hover:bg-blue-50">
      <div className="flex h-full flex-col justify-center">
        <p className="text-lg font-semibold text-slate-700">
          + Add New Sub Company
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Add another company under SSA Trading whenever needed.
        </p>
      </div>
    </button>
  );
}

/* Customer Group */

function CustomerGroupCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-blue-50">
      <p className="text-lg font-bold text-slate-900">
        {name}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>

      <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700">
        Open Customer List →
      </button>
    </div>
  );
}

/* Add Customer Group */

function AddGroupCard() {
  return (
    <button className="rounded-xl border-2 border-dashed border-slate-300 p-5 text-left transition hover:border-blue-400 hover:bg-blue-50">
      <p className="text-lg font-semibold text-slate-700">
        + Add Customer Group
      </p>

      <p className="mt-1 text-sm text-slate-500">
        Create another customer list under AQUA DROP.
      </p>
    </button>
  );
}

/* Management Card */

function ManagementCard({ title }: { title: string }) {
  return (
    <button className="rounded-xl border bg-slate-50 p-5 text-left transition hover:border-blue-300 hover:bg-blue-50">
      <p className="font-semibold text-slate-800">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        Manage {title.toLowerCase()}
      </p>
    </button>
  );
}

/* Action Button */

function ActionButton({ text }: { text: string }) {
  return (
    <button className="w-full rounded-lg border px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
      {text}
    </button>
  );
}