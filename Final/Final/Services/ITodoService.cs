﻿using Final.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final.Services
{
    public interface ITodoService
    {
        
        Task<IEnumerable<Todo>> Get();
        
        Task<Todo> GetById(int id);
        
        Task<Todo> Create(Todo todo);
        
        Task<Todo> Update(Todo todo);
        
        Task<bool> Delete(int id);

    }
}
