export default {
  Meta: {
    title: 'Grupos de Caça',
    description: 'Junte seus amigos para procurar bosses raros!',
  },
  defaultServer: '(todos)',
  createGroup: 'Criar grupo',
  settings: 'Configurações',
  notificate: 'Notificar',
  apply: 'Apply',
  publicBoard: {
    title: 'Descrição',
    add: 'Adicionar descrição',
    edit: 'Editar descrição',
  },
  privateBoard: {
    title: 'Mural interno',
    add: 'Adicionar mensagem',
    edit: 'Editar mensagem',
  },
  members: 'Membros',
  groupApplications: 'Novas solicitações',
  logHistory: 'Histórico do grupo',
  RollAvatar: {
    avatarAlt: 'Novo avatar do grupo',
    roll: 'Rodar',
  },
  CreateGuildDialog: {
    successToast: 'Grupo de caça criado!',
    errorMessage: '{{name}} já existe',
    groupName: 'Nome do grupo',
    namePlaceholder: 'Escolha um nome para o grupo',
    privateGroup: 'Grupo privado',
    privateTooltip:
      'Um grupo privado pode ser encontrado, mas seus membros estarão ocultos',
    exevoProExclusive: 'Exclusivo {{exevopro}}',
    unauthedAlert: 'Você deve estar {{login}} para criar um grupo de caça',
    login: 'logado',
    cancel: 'Cancelar',
    create: 'Criar',
  },
  GuildGrid: {
    searchName: 'Buscar por nome',
    searchPlaceholder: 'Nome do grupo',
    server: 'Buscar por servidor',
    findGroups: 'Buscar grupos',
    myGroups: 'Meus grupos',
    GuildList: {
      member: 'membro',
      members: 'membros',
      privateTooltip: 'Este grupo é privado',
      apply: 'Apply',
      emptyState: 'Nenhum grupo',
    },
  },
  GuildHero: {
    member: 'membro',
    members: 'membros',
  },
  ApplyDialog: {
    heading: 'Solicitação para {{guildName}}',
    applyAs: 'Entrar como',
    nameError: 'Nome deve ter entre {{min}}-{{max}} caracteres',
    message: 'Mensagem (opcional)',
    messagePlaceholder: 'Juro que não vou jogar SD em nenhum Yeti',
    cancel: 'Cancelar',
    submit: 'Enviar',
    toast: {
      success: 'Apply enviado!',
      error: 'Você já se juntou a esse grupo!',
    },
  },
  MemberList: {
    private: 'Este grupo é privado',
    role: 'Role',
    name: 'Nome',
    admin: 'Admin',
    moderator: 'Moderador',
    self: '(você)',
    ManageUser: {
      changeName: 'Mudar nome',
      addRole: 'Adicionar role',
      leaveGroup: 'Sair do grupo',
      kickMember: 'Kickar membro',
    },
    ManagingModes: {
      Role: {
        heading: 'Alteração de role',
        cancel: 'Cancelar',
        confirm: 'Confirmar',
        successToast: '{{name}} foi atualizado com sucesso!',
        options: {
          moderator: 'Moderador',
          member: 'Membro',
        },
      },
      Exclusion: {
        heading: {
          leave: 'Sair do grupo',
          kick: 'Kickar membro do grupo',
        },
        confirmMessage: {
          leave: 'Você tem certeza que deseja sair de {{name}}?',
          kick: 'Você tem certeza de que deseja kickar {{name}}?',
        },
        cancel: 'Cancelar',
        leave: 'Sair',
        kick: 'Kickar',
        groupDisbanded: 'Grupo de caça foi desfeito',
        newAdmin: '{{name}} é o novo admin do grupo',
      },
      ChangeName: {
        heading: 'Mudar seu nome',
        nameInput: 'Novo nome',
        nameError: 'Nome deve ter entre {{min}}-{{max}} caracteres',
        cancel: 'Cancelar',
        confirm: 'Confirmar',
        successToast: 'Seu nome foi atualizado com sucesso!',
      },
    },
  },
  SettingsDialog: {
    heading: 'Configurações',
    registeredDevice: 'Este dispositivo está registrado!',
    testNotification: 'Que tal experimentar uma notificação de {{button}}? 🔔',
    test: 'teste',
    sampleNotification: {
      title: 'Olá 👋',
      text: 'Parece que está tudo funcionando!',
    },
    enableNotifications: 'Por favor {{button}} neste dispositivo',
    enableButton: 'habilite notificações',
    registerSuccess: 'Este dispositivo foi registrado com sucesso!',
    retryRegistration:
      'Caso precise, você pode {{button}} o registro deste dispositivo',
    retry: 'refazer',
    notSupported: 'Este dispositivo não suporta Web Push Notifications',
    enableGroupNotifications: 'Receber notificações deste grupo',
    receiveNotificationsFor: 'Receber notificações para:',
    cancel: 'Cancelar',
    save: 'Salvar',
    successToast: 'Configurações salvas!',
  },
  ApplyList: {
    name: 'Nome',
    message: 'Mensagem',
    accept: 'Aceitar',
    reject: 'Rejeitar',
    rejectToast: 'Solicitação rejeitado!',
    loading: 'Carregando...',
    emptyState: 'Nenhuma solicitação',
  },
  EditGuildDialog: {
    heading: 'Editar grupo de caça',
    guildName: 'Nome do grupo',
    guildNamePlaceholder: 'Novo nome do grupo',
    nameError: 'Nome deve ter entre {{min}}-{{max}} caracteres',
    description: 'Descrição',
    descriptionPlaceholder: 'Adicionar descrição do grupo',
    messageBoard: 'Mural interno (apenas membros podem ver)',
    messageBoardPlaceholder: 'Adicionar uma mensagem ao mural',
    privateGroup: 'Grupo privado',
    privateTooltip:
      'Um grupo privado pode ser encontrado, mas seus membros estarão ocultos',
    exevoProRequired:
      'Ao menos um membro Exevo Pro é necessário para ter um grupo privado',
    cancel: 'Cancelar',
    save: 'Salvar',
    successToast: 'Grupo foi atualizado com sucesso!',
  },
  LogHistory: {
    event: 'Evento',
    leave: '{{name}} saiu do grupo',
    reject: '{{actor}} rejeitou a solicitação de {{target}}',
    kick: '{{actor}} kickou {{target}}',
    accept: '{{actor}} aprovou a solicitação de {{target}}',
    notification: '{{actor}} encontrou {{boss}}',
    emptyState: 'Nenhum evento',
    loadMore: 'Mostrar mais',
  },
  NotificationDialog: {
    heading: 'Notificar grupo',
    search: 'Procurar boss',
    emptyState: 'Nenhum boss',
    cancel: 'Cancelar',
    send: 'Enviar notificação',
    successToast: 'Notificação enviada!',
  },
  CheckedBosses: {
    checkedBosses: 'Bosses checados',
    search: 'Buscar',
    hideNoChance: 'Esconder sem chances',
    hideRecentlyChecked: 'Esconder recém checados',
    hideBlacklisted: 'Esconder bosses ignorados',
    details: 'Detalhes',
    notifyGroup: 'Notificar grupo',
    markAsChecked: 'Marcar como checado',
    markAsNoChance: 'Marcar como sem chance',
    unmarkAsNoChance: 'Desmarcar como sem chance',
    bossWasMarked: '{{boss}} foi marcado!',
    loading: 'Carregando...',
    lastTimeChecked: 'Última vez checado (por {{member}})',
    justChecked: 'recém checado',
    minutesAgo: 'minutos atrás',
    hourAgo: 'hora atrás',
    hoursAgo: 'horas atrás',
    showMore: 'Mostrar mais',
  },
}
