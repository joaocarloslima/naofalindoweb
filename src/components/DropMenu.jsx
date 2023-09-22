"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { apagar } from '@/actions/contas';
import toast from 'react-hot-toast';
import { useToast } from '@/hooks/toast';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';


export default function DropMenu({ idConta }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { error, success } = useToast()
  const { push } = useRouter()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    push(`/contas/${idConta}/edit`)
  }

  const handleDelete = async () => {
    const resp = await apagar(idConta)

    resp?.error ?
      error(resp.error) :
      success("conta apagada com sucesso")

    handleClose()
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ChevronDownIcon className='h-6 w-6 text-slate-300' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleEdit}>editar</MenuItem>
        

        <AlertDialog>
          <AlertDialogTrigger>
            <MenuItem>apagar</MenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Ao apagar a conta, todos os dados serão perdidos. Essa ação não tem volta.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>sim, quero apagar essa conta</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </Menu>
    </div>
  );
}