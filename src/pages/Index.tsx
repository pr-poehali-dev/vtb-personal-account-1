import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const depositData = {
    clientName: "Сидорова Анастасия Витальевна",
    amount: 1220960,
    rate: 18.5,
    openDate: "28.04.2024",
    closeDate: "28.08.2025",
    totalAccrued: 220960
  };

  const paymentHistory = [
    { date: "28.08.2024", amount: 72350 },
    { date: "28.12.2024", amount: 74320 },
    { date: "28.04.2025", amount: 74290 }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ВТБ Онлайн</h1>
              <p className="text-muted-foreground text-sm">Личный кабинет</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Добро пожаловать,</p>
            <p className="font-semibold">{depositData.clientName}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="deposits" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="deposits" className="flex items-center space-x-2">
              <Icon name="PiggyBank" size={16} />
              <span>Вклады</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <Icon name="History" size={16} />
              <span>История</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="deposits" className="space-y-6">
            {/* Main Deposit Card */}
            <Card className="border-border">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">Срочный вклад</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Активный
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">{formatCurrency(depositData.amount)}</p>
                    <p className="text-sm text-muted-foreground">Сумма вклада</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Percent" size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Процентная ставка</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">{depositData.rate}%</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Дата открытия</span>
                    </div>
                    <p className="font-semibold">{depositData.openDate}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="CalendarX" size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Дата закрытия</span>
                    </div>
                    <p className="font-semibold">{depositData.closeDate}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={16} className="text-green-500" />
                      <span className="text-sm text-muted-foreground">Начислено</span>
                    </div>
                    <p className="text-xl font-bold text-green-500">{formatCurrency(depositData.totalAccrued)}</p>
                  </div>
                </div>
                <div className="flex space-x-3 mt-6">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Управление вкладом
                  </Button>
                  <Button variant="outline">
                    <Icon name="Download" size={16} className="mr-2" />
                    Выписка
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Summary Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Следующая выплата</p>
                      <p className="text-lg font-semibold">28.08.2025</p>
                      <p className="text-sm text-green-500">Закрытие вклада</p>
                    </div>
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" size={24} className="text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Доходность</p>
                      <p className="text-2xl font-bold text-green-500">+{((depositData.totalAccrued / depositData.amount) * 100).toFixed(1)}%</p>
                    </div>
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Icon name="TrendingUp" size={24} className="text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="History" size={20} />
                  <span>История выплат процентов</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                          <Icon name="ArrowDown" size={20} className="text-green-500" />
                        </div>
                        <div>
                          <p className="font-semibold">Выплата процентов</p>
                          <p className="text-sm text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-500">+{formatCurrency(payment.amount)}</p>
                        <p className="text-xs text-muted-foreground">Зачислено на карту</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="Calculator" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">Итого начислено</p>
                          <p className="text-sm text-muted-foreground">За весь период</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">{formatCurrency(depositData.totalAccrued)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;